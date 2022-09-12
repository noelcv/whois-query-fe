import { IQuery } from 'src/app/types/domainQuery.interface';
import { EDomainActions } from '../actions/domain.actions';
import { DomainActions } from '../actions/domain.actions';
import { IResultsUiState, initialResultsUiState } from "../states/resultsUi.state";

export const ResultsUiReducers = (
  state = initialResultsUiState,
  action: DomainActions
): IResultsUiState => {
  switch (action.type) {
    case EDomainActions.DisplayResults: {
      return {
        show: !state.show
      }
    }
    default:
      return state;
  }
};
