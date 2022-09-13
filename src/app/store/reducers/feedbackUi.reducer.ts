import { EUiActions, UiActions } from '../actions/ui.actions';
import { initialValidationFeedbackUiState, IValidationFeedbackUiState } from '../states/validationUi.state';

export const FeedbackUiReducers = (
  state = initialValidationFeedbackUiState,
  action: UiActions
): IValidationFeedbackUiState => {
  switch (action.type) {
    case EUiActions.DisplayFeedback: {
      (() => {setTimeout(() => {}, 2500)})
      return {
        display: action.payload
      }
    }
    default:
      return state;
  }
};
