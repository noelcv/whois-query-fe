import { EDomainActions } from "../actions/domain.actions";
import { DomainActions } from "../actions/domain.actions";
import { initialWatchListState, IWatchListState } from "../states/watchList.state";

//TODO: test action
export const watchListReducers = (
  state = initialWatchListState,
  action: DomainActions
): IWatchListState => {
  switch (action.type) {
    case EDomainActions.AddDomainToWatchList: {
      state = {
        myWatchList: [...state.myWatchList, action.payload]}
    
      return {
        ...state
      }
    }
    default:
      return state;
  }
}
