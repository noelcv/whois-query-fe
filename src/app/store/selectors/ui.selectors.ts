import { createSelector } from "@ngrx/store";
import { IAppState } from "../states/app.state";
import { IFavoritesUiState } from "../states/favoritesUi.state";
import { IResultsUiState } from "../states/resultsUi.state";

const checkUiResult = (state: IAppState) => state.display;

export const selectedUiResult = createSelector(
  checkUiResult,
  (state: IResultsUiState) => state.show
);


const checkUiFavorite = (state: IAppState) => state.displayFavorites;

export const selectedUiFavorite = createSelector(
  checkUiFavorite,
  (state: IFavoritesUiState) => state.showFavorite
);
