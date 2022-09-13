import { EDomainActions } from '../actions/domain.actions';
import { DomainActions } from '../actions/domain.actions';
import { IFavoritesUiState, initialFavoritesUiState } from '../states/favoritesUi.state';

export const FavoritesUiReducers = (
  state = initialFavoritesUiState,
  action: DomainActions
): IFavoritesUiState => {
  switch (action.type) {
    case EDomainActions.DisplayFavorites: {
      (() => {setTimeout(() => {}, 2500)})
      return {
        showFavorite: action.payload
      }
    }
    default:
      return state;
  }
};
