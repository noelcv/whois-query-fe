import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";
import { domainReducers } from "./domain.reducer";
import { IAppState } from "../states/app.state";

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  domain: domainReducers,
};
