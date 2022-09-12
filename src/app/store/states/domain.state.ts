import { StoreDevtools } from "@ngrx/store-devtools";
import { IDomainResult } from "src/app/types/domainResult.interface";


export interface IDomainState {
  [x: string]: any;
  domainResult: IDomainResult;
}

export const initialDomainState: IDomainState = {
  domainResult: {
    result: undefined,
  }
}
