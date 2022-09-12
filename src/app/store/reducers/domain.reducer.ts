import { EDomainActions } from "../actions/domain.actions";
import { DomainActions } from "../actions/domain.actions";
import { IDomainState, initialDomainState } from "../states/domain.state";
import { Store, select } from '@ngrx/store'
import { of } from "rxjs";
import { ofType } from "@ngrx/effects";
export const domainReducers = (
  state = initialDomainState,
  action: DomainActions
): IDomainState => {
  switch (action.type) {
    case EDomainActions.GetDomainResult: {
      return {
        ...state, domainResult: action.payload
      }
    }
    default:
      return state;
  }
}

