import { Action } from "@ngrx/store";
import { IParsedDomain } from "src/app/types/parsedDomain.interface";

export enum EWatchListActions {
  AddDomainToWatchList = '[Add to Watchlist] Add Domain to WatchList',
  GetWatchList = '[WatchList] Get WatchList' 
  
}

//WATCHLIST ACTIONS
export class AddDomainToWatchList implements Action {
  public readonly type = EWatchListActions.AddDomainToWatchList;
  constructor(public payload: IParsedDomain) {}
}

export class GetWatchList implements Action {
  public readonly type = EWatchListActions.GetWatchList;
 
}

export type WatchListActions = AddDomainToWatchList | GetWatchList;