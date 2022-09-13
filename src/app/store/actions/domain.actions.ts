import { Action } from '@ngrx/store'
import { IQuery } from 'src/app/types/domainQuery.interface';
import { IDomainResult } from 'src/app/types/domainResult.interface';
import { IParsedDomain } from 'src/app/types/parsedDomain.interface';

export enum EDomainActions {
  GetDomainResult = '[Result Domain] Get Domain Result',
  GetDomainQuery = '[Query Domain] Get Domain Query',
  DisplayResults = '[Display Results] Show Result State',
  DisplayFavorites = '[Display Favorites] Show Favorites State',
  AddDomainToWatchList = '[Add to Watchlist] Add Domain to WatchList',
  GetWatchList = '[WatchList] Get WatchList' 
  
  //TODO: add further actions ex. GetDomainResultSuccess, GetDomainResultError
}

export class GetDomainResult implements Action {
  public readonly type = EDomainActions.GetDomainResult;
  constructor(public payload: IDomainResult) {}
}

export class GetDomainQuery implements Action {
  public readonly type = EDomainActions.GetDomainQuery;
  constructor(public payload: IQuery) {}
}

//UI ACTIONS
export class DisplayResults implements Action {
  public readonly type = EDomainActions.DisplayResults;
  constructor(public payload: boolean) {}
}

export class DisplayFavorites implements Action {
  public readonly type = EDomainActions.DisplayFavorites;
  constructor(public payload: boolean) {}
}

//WATCHLIST ACTIONS
export class AddDomainToWatchList implements Action {
  public readonly type = EDomainActions.AddDomainToWatchList;
  constructor(public payload: IParsedDomain) {}
}

export class GetWatchList implements Action {
  public readonly type = EDomainActions.GetWatchList;
 
}

export type DomainActions = GetDomainResult | GetDomainQuery | DisplayResults | DisplayFavorites | AddDomainToWatchList | GetWatchList;
