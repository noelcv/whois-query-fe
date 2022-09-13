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
      state = {
        myWatchList: [...state.myWatchList, action.payload]}
    
        
     //TODO: implement RemoveDomainFromWatchList + add ID to IParsedDomain Interface
      return {
        ...state,
      }
    }
    case EWatchListActions.GetWatchList: {
      
      return {
        ...state,
      }
    }
    default:
      return state;
  }
}

