import { RouterReducerState } from "@ngrx/router-store";
import { IDomainState, initialDomainState } from "./domain.state";
import { IQueryState, initialQueryState } from "./query.state";

export interface IAppState {
  router?: RouterReducerState;
  domain: IDomainState;
  query: IQueryState
}
/*this is the equivalent of the store in RTK -
*we register the different state for the different slices,
*i.e., (reducers + actions)
*/

export const initialAppState: IAppState = {
  domain: initialDomainState,
  query: initialQueryState,
}

export function getInitialState(): IAppState {
  return initialAppState;
}
