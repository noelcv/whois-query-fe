import { createSelector } from "@ngrx/store";
import { IAppState } from "../states/app.state";
import { IDomainState } from "../states/domain.state";
import { IResultsUiState } from "../states/resultsUi.state";

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
