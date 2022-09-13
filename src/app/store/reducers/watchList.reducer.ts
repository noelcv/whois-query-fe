import { EDomainActions } from "../actions/domain.actions";
import { EWatchListActions, WatchListActions } from "../actions/watchlist.actions";
import { initialWatchListState, IWatchListState } from "../states/watchList.state";

//TODO: test action
export const watchListReducers = (
  state = initialWatchListState,
  action: WatchListActions
): IWatchListState => {
  switch (action.type) {
    
    case EWatchListActions.AddDomainToWatchList: {
      state = {myWatchList: [...state.myWatchList, action.payload]}
    
      return {...state}
    }
    case EWatchListActions.GetWatchList: {
      
      return {...state}
    }
    
    case EWatchListActions.SelectFromWatchList: {
      
      const selectedDomain = state.myWatchList
        .filter(domain => domain.uid === action.payload.uid)[0];
      
      return {
        ...state, selectedFavorite: selectedDomain
      }
    }
    default:
      return state;
  }
}

