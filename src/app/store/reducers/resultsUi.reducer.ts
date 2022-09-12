import { EDomainActions } from '../actions/domain.actions';
import { DomainActions } from '../actions/domain.actions';
import { IResultsUiState, initialResultsUiState } from "../states/resultsUi.state";

export const ResultsUiReducers = (
  state = initialResultsUiState,
  action: DomainActions
): IResultsUiState => {
  switch (action.type) {
    case EDomainActions.DisplayResults: {
      (() => {setTimeout(() => {}, 2500)})
      return {
        show: !state.show
      }
    }
    default:
      return state;
  }
};
