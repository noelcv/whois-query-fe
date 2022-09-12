import { createSelector } from "@ngrx/store";
import { IAppState } from "../states/app.state";
import { IDomainState } from "../states/domain.state";
import { IResultsUiState } from "../states/resultsUi.state";
import { IWatchListState } from "../states/watchList.state";

const selectDomain = (state: IAppState) => state.domain;

export const selectedDomain = createSelector(
  selectDomain,
  (state: IDomainState) => state.domainResult
);

const checkResult = (state: IAppState) => state.display;

export const selectedUiResult = createSelector(
  checkResult,
  (state: IResultsUiState) => state.show
);

const checkWatchList = (state: IAppState) => state.watchList;

export const selectedWatchList = createSelector(
  checkWatchList,
  (state: IWatchListState) => state.myWatchList
  
)