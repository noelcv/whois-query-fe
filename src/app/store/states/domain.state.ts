import { IDomainResult } from "src/app/types/domainResult.interface";


export interface IDomainState {
  domainResult: IDomainResult;
}

export const initialDomainState: IDomainState = {
  domainResult: {
    domain: "",
  }
}
