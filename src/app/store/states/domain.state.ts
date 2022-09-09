import { IDomainResult } from "src/app/types/domainResult.interface";


export interface IDomainState {
  domainResult: IDomainResult | null;
}

export const initialDomainState: IDomainState = {
  domainResult: null,
}
