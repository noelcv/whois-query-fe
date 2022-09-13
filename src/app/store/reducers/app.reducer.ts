import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";
import { domainReducers } from "./domain.reducer";
import { IAppState } from "../states/app.state";
import { queryReducers } from "./query.reducer";
import { ResultsUiReducers } from "./resultsUi.reducer";
import { watchListReducers } from "./watchList.reducer";
import { FavoritesUiReducers } from "./favoritesUi.reducer";

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  domain: domainReducers,
  query: queryReducers,
  display: ResultsUiReducers,
  displayFavorites: FavoritesUiReducers,
  watchList: watchListReducers
};
