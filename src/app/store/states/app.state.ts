import { RouterReducerState } from "@ngrx/router-store";
import { IDomainState, initialDomainState } from "./domain.state";

export interface IAppState {
  router?: RouterReducerState;
  domain: IDomainState;
}

export const initialAppState: IAppState = {
  domain: initialDomainState,
}

export function getInitialState(): IAppState {
  return initialAppState;
}
